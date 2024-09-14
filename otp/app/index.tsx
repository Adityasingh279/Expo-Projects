import { Text, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const et = useRef(null);
  const et2 = useRef(null);
  const et3 = useRef(null);
  const et4 = useRef(null);
  const et5 = useRef(null);
  const et6 = useRef(null);
  const [fill, setFill] = useState("");
  const [fill2, setFill2] = useState("");
  const [fill3, setFill3] = useState("");
  const [fill4, setFill4] = useState("");
  const [fill5, setFill5] = useState("");
  const [fill6, setFill6] = useState("");

  const handleFocus = (ref: React.RefObject<TextInput>) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <SafeAreaView className="bg-grey">
      <Text className="font-bold text-xl mb-10">OTP Verification</Text>
      <View className="flex-row items-center justify-center gap-2">
        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et}
            className={`${
              fill.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center  text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill}
            onChangeText={(text) => {
              setFill(text);
              if (text.length >= 1) {
                handleFocus(et2);
              }
            }}
          />
        </View>

        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill2.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et2}
            className={`${
              fill2.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill2}
            onChangeText={(text) => {
              setFill2(text);
              if (text.length >= 1) {
                handleFocus(et3);
              } else if (text.length < 1) {
                handleFocus(et);
              }
            }}
          />
        </View>

        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill3.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et3}
            className={`${
              fill3.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill3}
            onChangeText={(text) => {
              setFill3(text);
              if (text.length >= 1) {
                handleFocus(et4);
              } else if (text.length < 1) {
                handleFocus(et2);
              }
            }}
          />
        </View>

        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill4.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et4}
            className={`${
              fill4.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill4}
            onChangeText={(text) => {
              setFill4(text);
              if (text.length >= 1) {
                handleFocus(et5);
              } else if (text.length < 1) {
                handleFocus(et3);
              }
            }}
          />
        </View>

        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill5.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et5}
            className={`${
              fill5.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill5}
            onChangeText={(text) => {
              setFill5(text);
              if (text.length >= 1) {
                handleFocus(et6);
              } else if (text.length < 1) {
                handleFocus(et4);
              }
            }}
          />
        </View>

        <View
          className={`p-2 border rounded-xl h-12 w-12 ${
            fill6.length >= 1 ? "bg-white" : "bg-[#00000033]"
          }`}
        >
          <TextInput
            ref={et6}
            className={`${
              fill6.length >= 1 ? "border-[#2AA952]" : "border-white"
            } border-b text-center text-xl font-bold`}
            keyboardType="numeric"
            maxLength={1}
            value={fill6}
            onChangeText={(text) => {
              setFill6(text);
              if (text.length >= 1) {
                handleFocus(et6);
              } else if (text.length < 1) {
                handleFocus(et5);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
