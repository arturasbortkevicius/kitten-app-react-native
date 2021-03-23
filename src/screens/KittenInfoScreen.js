import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const KittenInfoScreen = ({ route }) => {
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Image source={{ uri: route.params.url }} style={styles.image}></Image>
        <View style={styles.kittenDetails}>
          <Text style={styles.text}>Name: {route.params.name}</Text>
        </View>
        <View style={styles.kittenInfo}>
          <Text style={styles.text}>Kitten's Story</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            suscipit, iusto sint adipisci consequuntur similique, odit labore
            laborum vero maxime accusamus assumenda, ipsam maiores dolore optio
            itaque! Qui, fuga laudantium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis quaerat magnam voluptates sapiente eos
            aut, modi ex quidem cumque illum nulla. Cumque quaerat laboriosam
            nihil possimus facere quod, eligendi explicabo. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Ab omnis consequatur quo
            perferendis fugiat, culpa id quas ducimus perspiciatis maxime sequi
            voluptatum iste dolore placeat corrupti quos nesciunt! Amet,
            commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius unde consequuntur sint omnis distinctio, nemo voluptates
            corrupti reiciendis. Facilis alias praesentium architecto cum dolor
            unde quam earum ducimus laborum. Voluptatum!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default KittenInfoScreen;

const styles = StyleSheet.create({
  image: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  viewStyle: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
  kittenDetails: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  kittenInfo: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
