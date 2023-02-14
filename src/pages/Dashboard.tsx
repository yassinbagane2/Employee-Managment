import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="w-full p-2">
      <div className="flex justify-center items-center flex-col mx-4 p-6 bg-white rounded-md shadow-sm">
        <h2 className="text-blue-600 mb-2 text-xl">Recent Employees</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
