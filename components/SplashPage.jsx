import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';

export const SplashPage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Blackjack</Text>
			<Text style={styles.text}>Up for a game of Blackjack?</Text>
			<Text style={styles.text}>
				The game is simple, take turns with the dealer and play a card
			</Text>
			<Text style={styles.text}>Whoever gets closest to or hits 21 wins!</Text>
			<View style={styles.buttonContainer}>
				<Button color="black" title="PLAY!" style={styles.button} />
			</View>
		</View>
	);
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		width: windowWidth,
		height: windowHeight,
		backgroundColor: 'green',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 50,
		fontFamily: 'Play',
		color: 'white',
		marginBottom: 100,
	},
	text: {
		fontSize: 18,
		fontFamily: 'Play',
		color: 'black',
	},
	buttonContainer: {
		width: 200,
		marginTop: 100,
	},
});
