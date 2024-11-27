import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from "react-native";

export default function AiChat() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! I'm Goku, your AI assistant!", sender: "ai" },
    { id: "2", text: "What can you do for me?", sender: "user" },
    {
      id: "3",
      text: "I can assist with various tasks or answer questions!",
      sender: "ai"
    },
    { id: "4", text: "That's great! How do I get started?", sender: "user" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: `${Date.now()}-user`,
      text: input,
      sender: "user"
    };

    const aiResponse = {
      id: `${Date.now()}-ai`,
      text: "Got it! Let me think about that...",
      sender: "ai"
    };

    setMessages((prev) => [...prev, userMessage, aiResponse]);
    setInput(""); // Clear input field
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat with Goku</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === "user" ? styles.userBubble : styles.aiBubble
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.92,
    backgroundColor: "#F9F9F9"
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    backgroundColor: "#FFF"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333"
  },
  messagesContainer: {
    flexGrow: 1,
    padding: 16
  },
  messageBubble: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 20,
    maxWidth: "75%"
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#03A9F4"
  },
  aiBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderColor: "#DDD",
    borderWidth: 1
  },
  messageText: {
    fontSize: 16,
    color: "#333"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    backgroundColor: "#FFF"
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    marginRight: 8
  },
  sendButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  sendButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14
  }
});
