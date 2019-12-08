import React from 'react';
import ChatForm from './ChatForm'
import socket from './socket'

class App extends React.Component {

  state = {
      logs: [] // 전체 대화 내용
  }
  //life cycle

  componentDidMount() { //렌더링 끝났을때
    socket.on('chat-msg', (obj) => { //on은 받고
        const logs2 = this.state.logs
        obj.key = 'key-' + (this.state.logs.length + 1)
        logs2.unshift(obj) //가장 최근게 맨 위로
        this.setState({logs: logs2})
    })
}     
render() {
  const messages = this.state.logs.map(e => (
      <div key={e.key}>
          <span>{e.name}  :  </span>
          <span>{e.message}</span>
      </div>
  ))
  return (
      <div>
          <ChatForm />
          <div>{messages}</div>
      </div>
    )
  }
}

export default App;