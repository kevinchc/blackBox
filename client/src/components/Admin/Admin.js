import React from 'react';
import {
    Container,
    Row,
    Col,
    Label,
    Input,
    Button
} from 'reactstrap';
import './Product/Product.css';

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: '',
            imagePreviewUrl: '',
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e){
        e.preventDefault();
        console.log(e)
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
        console.log(reader)
        reader.readAsDataURL(file)
    }


    render(){

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if(imagePreviewUrl){
            $imagePreview = (<img src={imagePreviewUrl}/>)
        }

        return(
            <Container>
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
                                    <Col sm={{ size: 4, offset:2}}>
                                        <input type="file" onChange={this._handleImageChange}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{ size: 4, offset:2}}>
                                        <Button type="submit" onClick={this._handleSubmit}>
                                            Subir
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
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