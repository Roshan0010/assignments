
import {
	RecoilRoot,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import {
	currTodo,
	filterQuery,
	filteredTodo,
	todos,
} from "./store/atoms/Todos";

export default function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
				width: "300px",
				justifyContent: "center",
			}}
		>
			<RecoilRoot>
				<TodoInput />
				<AddTodo />
				<FilterQuery />
				<ListTodos />
			</RecoilRoot>
		</div>
	);
}
const ListTodos = () => {
	const todosList = useRecoilValue(todos);
	const filterList = useRecoilValue(filteredTodo);
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
			{!filterList && todosList && todosList.length > 0
				? todosList.map((todo, id) => <div key={id}>{todo}</div>)
				: null}
			{filterList && filterList.length > 0
				? filterList.map((todo, id) => <div key={id}>{todo}</div>)
				: null}
		</div>
	);
};

const AddTodo = () => {
	const todo = useRecoilValue(currTodo);
	const setTodos = useSetRecoilState(todos);
	const handleAddTodo = () => {
		setTodos((prevTodos) => [...prevTodos, todo]);
	};
	return (
		<>
			<button style={{ width: "100px" }} onClick={handleAddTodo}>
				Add Todo
			</button>
		</>
	);
};

const TodoInput = () => {
	const setTodo = useSetRecoilState(currTodo);
	// const todo=useRecoilValue(currTodo);
	// console.log(todo)
	console.log("here");
	return (
		<div style={{ display: "inline-flex" }}>
			<span>hmm new todo! </span>
			<input type="text" onChange={(e) => setTodo(e.target.value)} />
		</div>
	);
};
const FilterQuery = () => {
	const setfilterQuery = useSetRecoilState(filterQuery);
	return (
		<div style={{ display: "inline-flex" }}>
			<span>filter the todos ha😇 </span>
			<input type="text" onChange={(e) => setfilterQuery(e.target.value)} />
		</div>
	);
};
