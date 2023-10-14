import React from 'react';

function App() {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>No. of Tasks</th>
            <th>GitHub link</th>
            <th>Vercel deployment link</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Task-1</td>
            <td>
              <a target="_blank" href="https://github.com/Mayank6787/Assignment-3">
                GitHub_Task-1
              </a>
            </td>
            <td>
              <a target="_blank" href="https://assignment-3-sigma-azure.vercel.app/">
                Vercel_Task-1
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-2</td>
            <td>
              <a target="_blank" href="https://github.com/Mayank6787/A3-Task_02">
                GitHub_Task-2
              </a>
            </td>
            <td>
              <a target="_blank" href="https://a3-task-02.vercel.app/">
                Vercel_Task-2
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-3</td>
            <td>
              <a target="_blank" href="https://github.com/Mayank6787/A3-Task_03">
                GitHub_Task-3
              </a>
            </td>
            <td>
              <a target="_blank" href="https://a3-task-03.vercel.app/">
                Vercel_Task-3
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-4</td>
            <td>
              <a  href="">
                GitHub_Task-4
              </a>
            </td>
            <td>
              <a  href="">
                Vercel_Task-4
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-5</td>
            <td>
              <a target="_blank" href="https://github.com/Mayank6787/A3-Task_05">
                GitHub_Task-5
              </a>
            </td>
            <td>
              <a target="_blank" href="https://a3-task-05.vercel.app/">
                Vercel_Task-5
              </a>
            </td>
          </tr>
          <tr>
            <td>Task-6</td>
            <td>
              <a target="_blank" href="https://github.com/Mayank6787/A3-Task_06">
                GitHub_Task-6
              </a>
            </td>
            <td>
              <a target="_blank" href="https://a3-task-06.vercel.app/">
                Vercel_Task-6
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


