import { put, takeEvery, all} from 'redux-saga/effects'
import { addTask, deleteTask } from '../slice/slice'

function* addTaskAsync(action) {
    yield put(addTask(action.payload))
}

function* deleteTaskAsync(action) {
    yield put(deleteTask(action.payload));
}

function* watchAddTask() {
    yield takeEvery('tasks/addTaskAsync', addTaskAsync)
}

function* watchDeleteTask() {
    yield takeEvery('tasks/deleteTaskAsync', deleteTaskAsync)
}

export default function* rootSaga() {
    yield all([watchAddTask(), watchDeleteTask()]);
}