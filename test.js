import React, { Component } from 'react'
export default class PictureSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [
        {
          id: '1',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
      ],
      allselect: true

    }
  }
  componentDidMount() {
    this.state.pictures.map(item => {
      item.value = true
    })
    this.setState({
      pictures: this.state.pictures
    })
  }
  //单选
  select = (item) => {
    let list = this.state.pictures
    list[item.id].value = !list[item.id].value
    this.setState({
      pictures:list
    })
    if(!item.value){
      this.setState({
        allselect:false
      })
    }
    let result=this.state.pictures.every(item=>item.value===true)
    if(result){
      this.setState({
        allselect:true
      })
    }else{
      this.setState({
        allselect:false
      })
    }
  }
  //全选
  allchoose = () => {
    let check=this.state.allselect
    check=!check
    this.setState({
      allselect:check
    })
    let list=this.state.pictures
    list.map(item=>{
      item.value=!item.value
      this.setState({
        pictures:list
      })
    })

  }
  render() {
    return (
      <div className="container">
        <ul>
          {
            this.state.pictures.map(item => {
              <li key={item.id}>
                <input type="checkbox" checked={item.value} onChange={() => { this.select(item) }} />
                <img src="{item.url}" alt="" />
              </li>
            })
          }
          <div>全选
            <input type="checkbox" checked={this.state.allselect} onClick={this.allchoose} />
          </div>
        </ul>
      </div>
    )
  }
}