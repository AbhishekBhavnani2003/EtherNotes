import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <div className="card mb-3 mx-5 my-5" style={{ maxWidth: '900px' }}>
        <div className="row g-0">
          <div className="d-flex col-md-4 p-5 align-items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-SQYpLphAzVZoMMX-JPWfLsgEV1h-iExRA&usqp=CAU" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Ether Notes</h5>
              <p className="card-text" style={{ textAlign: 'justify' }}>
                Cloud Notes is a versatile online platform designed to streamline note-taking and organization for users across various devices. With its intuitive interface and robust features, Cloud Notes offers a seamless experience for capturing, storing, and accessing notes anytime, anywhere. Key features include:</p>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group feature-list">
                      <li className="list-group-item">Real-Time Syncing</li>
                      <li className="list-group-item">Cross-Platform Access</li>
                      <li className="list-group-item">Security and Privacy</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group feature-list">
                      <li className="list-group-item">Dark Mode</li>
                      <li className="list-group-item">Offline Access</li>
                      <li className="list-group-item">Customization Options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 my-5">

        <div class="col">
          <div class="card h-100">
            <img src="https://miro.medium.com/v2/resize:fit:849/1*CgprNwv-6oKamFmcNR-3kQ.jpeg" class="card-img-top" alt="..." style={{ height: '200px' }} />
            <div class="card-body">
              <h5 class="card-title">Initiate New Note: <br />Instantly Capture Ideas</h5>
              <p class="card-text" style={{ textAlign: 'justify' }}>Adding a note is simple. Just click the 'Add Note' button, and a blank canvas will appear where you can type or paste your content. Whether it's a quick reminder, a detailed brainstorm, or a list of to-dos, your notes are just a few clicks away.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://media.istockphoto.com/id/627101798/photo/hr-strategy-notes.jpg?s=612x612&w=0&k=20&c=cUWeNmmwYfN_QI64sUawwF9zYx4PKDGJJU6D4cN__CE=" class="card-img-top" alt="..." style={{ height: '200px' }} />
            <div class="card-body">
              <h5 class="card-title">Revise Note: <br /> Modify Your Ideas Easily</h5>
              <p class="card-text" style={{ textAlign: 'justify' }}>Editing notes allows you to refine your thoughts or update information as needed. Simply click on the note you wish to modify, and you can make changes directly within the text box. Whether you're correcting a typo or expanding on an idea, our editing feature makes it seamless to keep your notes up-to-date.</p>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://media.istockphoto.com/id/1200975784/photo/blank-yellow-note-on-cork-message-board.jpg?s=612x612&w=0&k=20&c=qnJyPxaPhk-1NTMmPJ_oOPwpyR0d9EoPo91_KtWUoZ0=" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Organize Your Notes: <br /> Remove Unwanted Content</h5>
              <p class="card-text" style={{ textAlign: 'justify' }}>
                Deleting a note is also straightforward. If you no longer need a particular note, just select it and hit the 'Delete' button. Deleted notes are permanently removed from the system to maintain a clutter-free environment.</p>
            </div>

          </div>
        </div>

        <footer class="footer bg-dark text-white my-5" style={{ width: '100%', padding: '10px', bottom: '0', marginBottom: '0px', justifyContent: 'end' }}>
          <div class="container-fluid text-center">
            <span class=" text-white">Developed by Abhishek Bhavnani &copy; EtherNotes 2024</span>
          </div>
        </footer>



      </div>
    </div>
  );
}

export default About;
