import React, { Component } from 'react';
import ListItem from '../ContentListItem/ListItem';

class ContentList extends Component {
  render() {
    const {
      posts,
      activeId,
      onListItemClick, //전달 받은 이벤트 핸들러
    } = this.props;
    return (
      <div className="list">
        {posts.map(item => {
          const { id, title, contents } = item;
          return (
            <ListItem
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              content={contents}
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ContentList;

// import React, { Component } from 'react';

// const Content = () => {
//   return (
//     <div className="content">
//       안녕세상
//       {this.props.tilte}
//       {this.props.body}
//     </div>
//   );
// };

// class ContentList extends Component {
//   state = {
//     news: { id: '0', title: '제목', body: '내용' },
//   };

//   render() {
//     return (
//       <div className="content-list">
//         {this.state.news
//           ? this.state.news.map(news => {
//               return (
//                 <Content key={news.id} title={news.title} body={news.body} />
//               );
//             })
//           : ''}
//       </div>
//     );
//   }
// }

// export default ContentList;
