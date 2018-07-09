import React, {Component} from 'react'

class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }}


        componentWillMount(){
        console.log('---', mounting);
        }

    render(){
        const {article} = this.props; //??????????????
        const style = {width: "50%"}
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </h2>

                {body}

                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen}) //?????????????????????
    }
}


export default Article