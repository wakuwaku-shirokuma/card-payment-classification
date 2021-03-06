//export default App;
import React, { Component } from 'react';
import Form from './Form';
import List from  './List';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // データ保存
  handleAdd(e){
    console.log(e.target.title.value);
    //これを書かないとリダイレクトされてしまう
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({title: e.target.title.value}); // まだ保存されていない
    // setStateを使ってstateを上書き
    this.setState({todo: this.state.todo}); // 保存完了
    // inputのvalueを空に
    e.target.title.value = '';
  }

  // データ削除
  handleRemove(i){
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i,1);
    // setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div>
        {/*ナビゲーション*/}
        <nav style={{ background: "#666" }}>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ margin: 10 }}><a href="/" style={{ color: "#fff", textDecoration: 'none' }}>Home</a></li>
            <li style={{ margin: 10 }}><a href="/about" style={{ color: "#fff", textDecoration: 'none' }}>About</a></li>
          </ul>
        </nav>
        {/*ヘッダー*/}
        {/*
        <header style={{ height: 200, background: "#ddd", padding: 20}}>
          header
        </header>
        */}
        {/*メインコンテンツ*/}
        <div className="siimple-box siimple--bg-dark">
          <h1 className="siimple-box-title siimple--color-white">カードの支払いチェックリスト</h1>
          <Form handleAdd={this.handleAdd}/>
          <div className="siimple-rule"></div>
          <List todos={this.state.todo} handleRemove={this.handleRemove}/>
        </div>
        {/*フッター*/}
        <footer style={{ height: 100, background: "#666", color: "#fff", padding: 20 }}>
          footer
        </footer>
      </div>
    );
  }
}
