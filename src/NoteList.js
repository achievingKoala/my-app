import React from 'react';

class NoteList extends React.Component {
    noteList = ['hahah', 'ooo', 'ok']
    
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            nList : this.noteList
        };
    }

    htmlNoteList = this.noteList.map((item,index) => 
        <li>{index} : {item}</li>
    );
    
    render() {
        return (
            <div>
                <h1>Note :</h1>
                <ul>
                    {this.htmlNoteList}
                </ul>
            </div>
        );
    }
}

export default NoteList;