import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const PostLink = props => (
  <li>
    <Link href={`/${props.link}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Header = ({ header }) => {
  return (
    <nav>
      <ul>
        {header.nav.map( (h, index) => (
          <PostLink key={index} name={h.name} link={h.link} />
        ))}
      </ul>
    </nav>
  )
}


const mapStateToProps = state => ({
  header: state.header
})

export default connect(mapStateToProps)(Header)
// export default Header