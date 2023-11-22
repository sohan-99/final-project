import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    return (
        <div>
        <h2 className="text-3xl">
            <span>Hi, Welcome </span>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </h2>
        <div className="stats shadow">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaDollarSign className='text-3xl'></FaDollarSign>
                </div>
                <div className="stat-title">Revenue</div>
                <div className="stat-value">${stats.revenue}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaUsers className='text-3xl'></FaUsers>
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value">{stats.users}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>


            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaBook className='text-3xl'></FaBook>
                </div>
                <div className="stat-title">Menu Items</div>
                <div className="stat-value">{stats.menuItems}</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div className="stat-title">Orders</div>
                <div className="stat-value">{stats.orders}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
        <div className="flex">
            <div className="w-1/2">
                {/* <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>
                </BarChart> */}
            </div>
            <div className="w-1/2">
                {/* <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart> */}
            </div>
        </div>
    </div>
    );
};

export default AdminHome;