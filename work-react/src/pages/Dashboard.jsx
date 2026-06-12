const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Leads Dashboard
      </h1>

      <div className="bg-white shadow rounded-xl p-6">

        <table className="w-full">

          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Buy Land</td>
              <td>₦5,000,000</td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Dashboard;