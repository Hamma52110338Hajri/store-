import { Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

function HomePage() {
  const images = [
    "https://cdn4.vectorstock.com/i/1000x1000/74/98/promotion-sign-in-modern-supermarket-background-vector-22427498.jpg",
    "https://media.istockphoto.com/id/155443388/photo/dairy-discount-in-grocery-store.jpg?s=612x612&w=0&k=20&c=zpSo5vC7jQHzsJju0Y48E-a5TQItSRDJbz4vF7WuCWc=",
    "https://img.freepik.com/premium-photo/fresh-food-vegetables-shopping-basket-mobile-smartphone-wood-table-with-supermarket-aisle-blurred-background-grocery-online-concept_293060-4950.jpg",
  ];

  return (
    <View style={{ marginTop: 45, marginBottom: 650 }}>
      <SliderBox
        images={images} 
        sliderBoxHeight={200}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)",
        }}
        ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
}

export default HomePage;
