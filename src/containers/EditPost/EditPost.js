import React, {Component} from 'react';
import axios from '../../axios_news';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import FileUploader from "react-firebase-file-uploader";
import {convertToHTML, convertFromHTML} from 'draft-convert';
import firebase from "../../firebase/firebase";

class EditPost extends Component {
    state = {
        title: '',
        text: '',
        fullText:'',
        editorState: EditorState.createEmpty()
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('/posts/' + id + '.json').then((response) => {
            let title = response.data.title;
            let text = response.data.text;
            let editorState = EditorState.createWithContent(convertFromHTML(response.data.fullText));
            this.setState({title, text, editorState})
        })
    };
    removePost = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;

        axios.delete('/posts/' + id + '.json').then(() => {
            this.props.history.push('/');
        }).catch(error => console.log(error))
    };

    savePost = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        let fullPost = {
            title: this.state.title,
            text: this.state.text,
            fullText: this.state.fullText,
        };
        axios.patch('/posts/' + id + '.json', fullPost).then(() => {
            this.props.history.push('/news');
            // console.log('test')
        }).catch(error => console.log(error))
    };

    valueChanged = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    };

    onEditorStateChange = (editorState) => {

        let fullText = convertToHTML(editorState.getCurrentContent());
        this.setState({editorState, fullText})
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
            <section className="edit_post section">
                <form className="form_edit" onSubmit={this.savePost}>
                <h1>You can edit this post here</h1>
                    <p>Progress: {this.state.progress}%</p>
                    <FileUploader
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
                <input name="title" type="title" className="text_input" value={this.state.title} onChange={this.valueChanged}/>
                <input name="text" type="text" className="text_input" value={this.state.text} onChange={this.valueChanged}/>
                {/*<textarea name="fullText" className="text_input full_text" value={this.state.fullText} onChange={this.valueChanged}/>*/}
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                />
                <button className="btn_save btn_form" onClick={this.savePost}>Save</button>
                <button className="btn_delete btn_form" onClick={this.removePost}>Delete</button>
                </form>
            </section>
        );
    }
}

export default EditPost;