import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/Header'
import './App.css';

const App = () => {
  const [scores, setScores] = useState([]);

  const NBA_URL = `http://localhost:5000/api/v1/updates`;

  useEffect(() => {
       // fetch data
       axios.get(NBA_URL)
       .then(({ data }) => {
         setScores(data);
       })
       .catch((err) => {
         console.log(err)
       })

    // window.$(document).ready(function () {
    //   window.$('#dtBasicExample').DataTable();
    //   window.$('.dataTables_length').addClass('bs-select');
    // });
 
  }, [])

    return (
      <>
        <Header />
        <main>
        <br />
        <div className="container">
            <div className="col-md-12">
                <div className="card card-cascade wider reverse">
              
                    <div className="card-body card-body-cascade text-center">

                      <h4 className="card-title"><img src='https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=100&h=70&transparent=true' alt="basket" />{""}<strong></strong></h4>
                      <h6 className="font-weight-bold indigo-text py-2">Providing all basket ball Score updates</h6>
                      {/* table */}
                      <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                          <thead>
                            <tr>
                              <th className="th-sm">Date</th>
                              <th className="th-sm">Home Team
                              </th>
                              <th className="th-sm">Home team score
                              </th>
                              <th className="th-sm">Visitors Team
                              </th>
                              <th className="th-sm">Visitors Team Score
                              </th>
                              <th>Status
                              </th>
                              <th>Season
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                scores.map((score, index) => (
                                  <tr key={index}>
                                    <td>{score.date.replace(/T/, ' ').replace(/\..+/, '').slice(0,10)}</td>
                                    <td>{score.home_team}</td>
                                    <td>{score.home_team_score}</td>
                                    <td>{score.visitor_team}</td>
                                    <td>{score.visitor_team_score}</td>
                                    <td>{score.status}</td>
                                    <td>{score.season}</td>
                                  </tr>
                                ))
                            }
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Date
                              </th>
                              <th>Home Team
                              </th>
                              <th>Home Team Score
                              </th>
                              <th>Visitors Team
                              </th>
                              <th>Visitors Team Score
                              </th>
                              <th>Status
                              </th>
                              <th>Season
                              </th>
                            </tr>
                          </tfoot>
                        </table>
                      
                      <a className="px-2 fa-lg li-ic" href="#!"><i className="fab fa-linkedin-in"></i></a>
                      <a className="px-2 fa-lg tw-ic" href="#!"><i className="fab fa-twitter"></i></a>
                      <a className="px-2 fa-lg fb-ic" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                  </div>
            </div>
        </div>

        </main>
      </>
    );
  }

export default App;
