import React, {Component} from 'react';
import axios from '../../axios_news';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import firebase from '../../firebase/firebase';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import {convertToHTML} from 'draft-convert';
import FileUploader from "react-firebase-file-uploader";
import "./Add.css"
class Add extends Component {

    state = {
        isUploading: false,
        progress: 0,
        newsItem: {},
        editorState: EditorState.createEmpty()
    };
    valueChanged = (event) => {
        const newsItem = {...this.state.newsItem};
        const name = event.target.name;
        newsItem[name] = event.target.value;
        this.setState({
            newsItem
        });
    };

    postHandler = event => {
        event.preventDefault();
        const newsItem = {...this.state.newsItem};
        axios.post('/posts.json', newsItem)
            .finally(() => {
                this.props.history.push('/news');
            })
    };

    onEditorStateChange = (editorState) => {
      const newsItem = {...this.state.newsItem};

      newsItem.fullText = convertToHTML(editorState.getCurrentContent());
        this.setState({editorState, newsItem})
    };


    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        const newsItem = {...this.state.newsItem};

        newsItem.imageName = filename;
        this.setState({newsItem, progress: 100});
        // this.setState({ avatar: filename, progress: 100});
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                newsItem.imageURL = url;
                this.setState({ newsItem });
            });
    };
    render() {
        return (
                <section className="add_block section">
                    <h1>Add New post</h1>

                    <form className="form" onSubmit={this.postHandler}>
                        <p>Progress: {this.state.progress}%</p>
                        <FileUploader
                            required
                            className="file_uploader"
                            accept="image/*"
                            name="newsPicture"
                            id="newsPicture"
                            randomizeFilename
                            storageRef={firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                        <input name="title" type="text" className="text_input" onChange={this.valueChanged} required/>
                        <input name="text" className="text_input" onChange={this.valueChanged} required/>
                        {/*<textarea name="fullText" className="text_input full_text" onChange={this.valueChanged}/>*/}
                        <Editor
                            editorState={this.state.editorState}
                            onEditorStateChange={this.onEditorStateChange}
                            required/>
                        <button className="btn_form btn_add">Add</button>
                    </form>
                </section>
        );
    }
}

export default Add;
