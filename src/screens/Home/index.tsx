import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { Empty } from "../../components/Empty";

type Task = {
    id: string;
    text: string;
    done: boolean;
}

export function Home () {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState("");

    function handleAddTask() {
        const task = {
            id: new Date().getTime().toString(),
            text: taskText,
            done: false
        }

        setTasks([...tasks, task]);
        setTaskText("");
    }

    function handleDeleteTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleMarkTaskAsDone(id: string) {
        setTasks(tasks.map(task => task.id === id ? {
            ...task,
            done: !task.done
        } : task));
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.header}>
                    <Image
                        source={require("../../../assets/Logo.png")}
                        style={styles.image}
                    />
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor={"#808080"}
                            onChangeText={setTaskText}
                            value={taskText}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                            <Image source={require("../../../assets/plus.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.content_header}>
                    <View style={styles.content_header_text_container}>
                        <Text style={styles.content_header_text}>Criadas</Text>
                        <Text style={styles.content_header_textQtd}>
                            {
                                tasks.length
                            }
                        </Text>
                    </View>
                    <View style={styles.content_header_text_container}>
                        <Text style={styles.content_header_text}>Concluídas</Text>
                        <Text style={styles.content_header_textQtd}>
                            {
                                tasks.filter(task => task.done).length
                            }
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Card text={item.text} onRemove={() => handleDeleteTask(item.id)} done={item.done} onDone={() => handleMarkTaskAsDone(item.id)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Empty />
                    )}
                />
            </View>
        </View>
    )
}