import React from "react";
import PlaceholderImage from '../../assets/images/pencil.png'

class ProfilePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageBase64: ''
        }
    }

    onChangeInput = (e) => {
        new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            reader.onloadend = function () {
                resolve(reader.result) //base64
            }
        })
            .then((base64) => {
                this.setState({
                    imageBase64: base64
                })
            }).catch(err => console.log('No change in uploaded image, no re-rendering needed'))
    }

    render() {
        return (
            <div>
                <img className="profile-picture" src={this.state.imageBase64 === '' ? PlaceholderImage : this.state.imageBase64} alt="profile" />
                <label>Your Profile Picture
                    <input
                        onChange={this.onChangeInput}
                        type="file" id="myFile" name="filename" accept="image/png, image/gif, image/jpeg, image/webp, image/jpg" />
                </label>
            </div>
        )
    }
}

export default ProfilePicture
