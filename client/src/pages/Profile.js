import React from 'react'


const Profile = () => {
  const user = 'testuser1';
  // const { username: userParam } = 'testuser1';

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div class="ui center aligned grid">
      <div class="center aligned two column row">
        <div class="column">
          <div class="ui segment">
            <h1>Playlist</h1>

            <div>
              <div className="single-playlist">
                <h3>Song Title</h3>
                <p>Artist Name</p>
              </div>
              <div className="single-playlist">
                <h3>Song Title</h3>
                <p>Artist Name</p>
              </div>
              <div className="single-playlist">
                <h3>Song Title</h3>
                <p>Artist Name</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <h1>Comments</h1>
            <div>
              <div className="single-comment">
                <h3>Username</h3>
                <p>Comment</p>
              </div>
              <div className="single-comment">
                <h3>Username</h3>
                <p>Comment</p>
              </div>
              <div className="single-comment">
                <h3>Username</h3>
                <p>Comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile