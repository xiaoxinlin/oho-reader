import {connect} from 'react-redux';
import * as action from '../redux/action/index'

const Main = (component) => {
  const mapStateToProps = (state) => {
    let {
      fetchBookList,
      fetchBookItem,
      bookList,
      bookSource,
      chapterList,
      chapterContent
    } = state
    return {
      fetchBookList,
      fetchBookItem,
      bookList,
      bookSource,
      chapterList,
      chapterContent
    }
  }

  return connect(
    mapStateToProps,
    action
    )(component)
}

export default Main;