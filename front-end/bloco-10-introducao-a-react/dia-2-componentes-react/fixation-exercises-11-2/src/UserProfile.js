import React from 'react';

class UserProfile extends React.Component {
render() {
    const { name, email, avatar } = this.props.user;
    return (
        <section>
            <p>user: {name}</p>
            <p>email: {email}</p>
            <img src={avatar} alt={name}/>
        </section>
    );
}
}

export default UserProfile;