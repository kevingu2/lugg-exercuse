import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList
} from "react-native";

import SwipeableViews from 'react-swipeable-views-native';

import { Color, Font } from "./constants";

const Button = ({ onPress, children, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} {...props}>
      <SafeAreaView style={Styles.ButtonRoot}>
        <View style={Styles.ButtonInner}>
          <Text style={Styles.ButtonLabel}>{children}</Text>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const days = [
  {},
  {day: "Today", date: "Dec 1"},
  {day: "Tomorrow", date: "Dec 2"},
  {day: "Monday", date: "Dec 3"},
  {day: "Tuesday", date: "Dec 4"},
  {day: "Wednesday", date: "Dec 5"},
  {day: "Thursday", date: "Dec 6"},
  {day: "Friday", date: "Dec 7"},
  {day: "Saturday", date: "Dec 8"},
  {day: "Sunday", date: "Dec 9"},
  {day: "Monday", date: "Dec 10"}
]

const times = [{
  title: "Hours",
  data: [
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "8:00 PM - 9:00 PM",
    "10:00 PM - 11:00 PM",
    "11:00 PM - 12:00 AM",
    "12:00 AM - 1:00 AM",
    "1:00 AM - 2:00 AM",
    "2:00 AM - 3:00 AM",
    "3:00 AM - 4:00 AM",
    "4:00 AM - 5:00 AM"
  ]
}]

class App extends React.Component {

  render() {
    let daysRow = []
    console.log(days.length)
    for (i = 0; i < days.length - 1; i++)  
    {   
      threeDay = []
      console.log("i:" + i)
      for (j = i; j < i + 3 && j < days.length; j++) {
        day = days[j]
        console.log(day.day)
        dayStyles = Styles.DayText
        dateStyles = Styles.DateText
        if (j == i + 1) {
          dayStyles = Styles.HighlightedDayText
          dateStyles = Styles.HighlightedDateText
        }
        threeDay.push(
          <View style={Styles.Day} key={i+j}>
            <Text style={dayStyles} key={"Text1"+i+j}>{day.day}</Text>
            <Text style={dateStyles} key={"Text2"+i+j}>{day.date}</Text>
          </View>
        )
      }
      daysRow.push(
        <View style={Styles.Days} key={"days"+i+j}>
          {threeDay}
        </View>
      )

    }
    return (
      <View style={Styles.Container}>
        <StatusBar barStyle="light-content" />
        <View style={Styles.Header}>
          <Text style={Styles.HeaderText}>
            Welcome to the React Native Lugg Exercise!
          </Text>
        </View>
        <View style={Styles.Body}>
          <View style={Styles.DayBody}>
            <SwipeableViews>
              {daysRow}

            </SwipeableViews>
          </View>
          <SectionList
            renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}

            sections={times}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
              return (
                <View style={Styles.container}>
                  <View style={Styles.HoursBody}>
                    <Text style={Styles.TimeText}>{item}</Text>
                  </View>
                </View>
              )
            }}  
          />
        </View>
        <View style={Styles.Footer}>
          <Button style={Styles.Button}>Next</Button>

        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.primary
  },
  Header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Footer: {},
  Body: {
    height: 248,
    backgroundColor: "red",
    flexDirection: 'column',
    justifyContent: "flex-start",
    backgroundColor: Color.primaryDarker

  },
  Days: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Day: {
    flexGrow: 1,
    height: 50,
    backgroundColor: Color.primary,
    alignItems: "center"
  },
  DayText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18,
  },
  DateText: {
    color: "#fff",
    fontSize: 15,
  },
  HighlightedDayText: {
    color: Color.action,
    fontWeight: 'bold',
    fontSize: 18,
  },
  HighlightedDateText: {
    color: Color.action,
    fontSize: 15,
  },
  TimeText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },
  DateText: {
    color: "#fff",

  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  Hours: {
    alignItems: "center",
    color: "#fff",
  },
  DayBody: {
    flexBasis: 45
  },
  HoursBody: {
    backgroundColor: Color.primaryDarker,
    flexGrow: 1,
    flexBasis: 55
  },
  HeaderText: {
    ...Font.regular,
    color: "#fff",
    textAlign: "center",
    maxWidth: 320
  },
  ButtonRoot: {
    backgroundColor: Color.action
  },
  ButtonInner: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonLabel: {
    ...Font.medium,
    color: Color.primary,
    fontSize: 18
  }
});

export default App;
