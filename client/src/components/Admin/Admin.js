import React from 'react';
import {
    Container,
    Row,
    Col,
    Label,
    Input,
    Button,
    FormText
} from 'reactstrap';
import './Product/Product.css';
import AddIcon from '@material-ui/icons/Add';

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: '',
            imagePreviewUrl: '',
            detail: [],
            ...this.emptyDetail()
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    emptyDetail = () => {
        return {
            description: ""
        }
    };

    changeDescription = (e) => {
        this.setState({description: e.target.value});
    };

    addDetail = (e) => {
        var detail = new Object();
        detail.description = this.state.description;
        console.log(detail);
        this.resetDescription();

    };

    resetDescription = () => {
        this.setState({description: ""})
    };


    _handleSubmit(e){
        e.preventDefault();
    }

    _handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl:reader.result
            })
        };
        reader.readAsDataURL(file)
    }

    render(){

        let {imagePreviewUrl, description} = this.state;
        let $imagePreview = null;
        if(imagePreviewUrl){
            $imagePreview = (<img src={imagePreviewUrl}/>)
        }

        return(
            <Container>
                <Row className="TittleProduct">
                    <h3>CREAR PRODUCTO</h3>
                </Row>
                <Row>
                    <Col>
                        <Label for="code">Codigo del Producto</Label>
                        <Input type="text" name="code" id="code" placeholder="Codigo del producto"/>
                        <Label for="name">Nombre del Producto</Label>
                        <Input type="text" name="name" id="name" placeholder="Nombre del producto"/>
                        <Label for="price">Precio del Producto</Label>
                        <Input type="text" name="price" id="price" placeholder="Precio del producto"/>
                    </Col>
                    <Col>
                        <Row>
                            <Col sm={{ size: 6, offset:3}}>
                                <Row className="ImageUploaded">
                                    <div className="imgPreview">
                                        {$imagePreview}
                                    </div>
                                </Row>
                                <Row>
                                    <Col sm={{ size: 4}}>
                                        <input type="file" onChange={this._handleImageChange}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="TittleProduct">
                    <h3>DETALLES</h3>
                </Row>
                <Row className="detailProduct">
                    <Col sm="2" className="ImageDetail">
                        <Label for="namedetail"/>
                        <Input type="text" name="namedetail" id="namedetail"/>
                    </Col>
                    <Col sm="8">
                        <Label for="code">Descripción</Label>
                        <Input type="textarea"
                               name="text"
                               id="exampleText"
                               placeholder="Agrega alguna descripcion del producto"
                               value={this.state.description}
                               onChange={this.changeDescription}/>
                    </Col>
                    <Col sm="2" className="addButton">
                        <Button onClick={this.addDetail}>
                            <AddIcon />
                        </Button>
                    </Col>
                </Row>
                <Row className="ButtonSend">
                    <Button>Save</Button>
                </Row>
            </Container>
        )
    }
}

export default Admin;