import React from "react";
import PlaceholderImage from '../../assets/images/pencil.png'
import Interactable from "../Interactable";
// import interact from "interactjs";

const draggableOptions = {
    onmove: event => {
      const target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
  
      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";
  
      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
};

const resizableOptions = {
    edges: { top: true, left: true, bottom: true, right: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

        x = (parseFloat(x) || 0) + event.deltaRect.left
        y = (parseFloat(y) || 0) + event.deltaRect.top

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`
        })

        Object.assign(event.target.dataset, { x, y })
      }
    }
  }
  
class ProfilePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBase64: ''
        }
    }

    onChangeInput = async (e) => {
        //await Promise to resolve first,
        const base64 = await this.#getImageBase64(e.target.files[0])
        //then only call this.setState()
        if (typeof base64 === typeof 'string comparison') {
            this.setState({
                imageBase64: base64
            })
        }
    }

    #getImageBase64 = async (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = function () {
                resolve(reader.result) //base64
            }
        }).catch(err => console.log('No file was uploaded, or it was not an image.'))
    }

    render() {
        return (
            <div id="ProfilePicture">
                <Interactable draggable={true} draggableOptions={draggableOptions} resizable={true} resizableOptions={resizableOptions}>
                    <img className="profile-picture" src={this.state.imageBase64 === '' ? PlaceholderImage : this.state.imageBase64} alt="profile" />
                </Interactable>

                <p className="upload-input-label-and-wrapper">Upload a profile picture</p>
                <input
                    className="file-input"
                    onChange={this.onChangeInput}
                    type="file" id="myFile" name="filename" accept="image/png, image/gif, image/jpeg, image/webp, image/jpg" />
            </div>
        )
    }
}

export default ProfilePicture
