import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spinner } from '../layout/Spinner'
import { getPost } from '../../actions/posts'
import { Link } from 'react-router-dom'

import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const Post = ({ getPost, posts: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost])

  return loading || !post ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = { getPost }

export default connect(mapStateToProps, mapDispatchToProps)(Post)
