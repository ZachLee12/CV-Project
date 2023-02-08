import React from "react";
import PlaceholderImage from '../../assets/images/pencil.png'

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
        this.setState({
            imageBase64: base64
        })
    }

    #getImageBase64 = async (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = function () {
                resolve(reader.result) //base64
            }
        }).catch(err => console.log('No change in uploaded image, no re-rendering needed'))
    }

    render() {
        return (
            <div id="ProfilePicture">
                <img className="profile-picture" src={this.state.imageBase64 === '' ? PlaceholderImage : this.state.imageBase64} alt="profile" />
                <label className="upload-input-label-and-wrapper">Upload a profile picture
                    <input
                        className="file-input"
                        onChange={this.onChangeInput}
                        type="file" id="myFile" name="filename" accept="image/png, image/gif, image/jpeg, image/webp, image/jpg" />
                </label>
            </div>
        )
    }
}

export default ProfilePicture
