import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasks/operations";
import { selectLoading } from "../redux/tasks/selectors";

export default function TaskPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <h1>Your Tasks</h1>
      <div>TaskEditor</div>
      <div>{isLoading && "Request in progress..."}</div>
    </>
  )
}