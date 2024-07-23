import { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import { TasksContext } from "./TasksContext";
import { useLocalSearchParams } from "expo-router";

const TaskDetail = () => {
    const { taskId } = useLocalSearchParams()
    const task = useContext(TasksContext).find(elem => elem.id.toString() === taskId)! // TODO: check force no null

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task ID: {taskId}</Text>
            <Text style={styles.description}>Description: {task.description}</Text>
            <Text style={task.isDone ? styles.status : {...styles.status, color: "red"}}>Status: {task.isDone ? "Completed" : "Pending"}</Text>
            <Text style={styles.date}>Added Date: {task.addedDate.toDateString()}</Text>
            {task.doneDate && <Text style={styles.date}>Done Date: {task.doneDate!.toDateString()}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    status: {
        fontSize: 16,
        marginBottom: 5,
        color: "green"
    },
    date: {
        fontSize: 14,
        color: '#555',
    },
});

export default TaskDetail