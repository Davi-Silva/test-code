import java.util.Scanner;

public class RecursiveCalculator {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		int menu;
		long n;
		String nString;

		System.out.println("-----MENU-----");
		System.out.println("...Select the numeric base input...");
		System.out.println("1) Decimal\n2) Binary\n3) Octal\n4) Hexadecimal\n ");

		do {
			menu = in.nextInt();
			switch (menu) {
			case 1:
				System.out.println("...Decimal...");
				System.out.print("Type a number:");
				n = in.nextLong();
				System.out.println("Binary:\t\t" + decimalToBinary(n) + "\nOctal:\t\t" + decimalToOctal(n)
						+ "\nHexadecimal:\t" + decimalToHexadecimal(n));
				break;
			case 2:
				System.out.println("...Binary...");
				System.out.print("Type a number:");
				n = in.nextLong();
				nString = Long.toString(n);
				System.out.println(binaryToDecimal(nString));
				break;
			case 3:
				System.out.println("...Octal...");
				System.out.print("Type a number:");
				n = in.nextLong();
				nString = Long.toString(n);
				System.out.println(binaryToDecimal(nString));
				break;
			case 4:
				System.out.println("...Hexadecimal...");
				System.out.print("Type a number:");
				n = in.nextLong();
				nString = Long.toString(n);
				System.out.println(binaryToDecimal(nString));
				break;
			case -1:
				break;
			}
		} while ((menu < -1 || menu > 4) || menu == 0);

		in.close();
	}

	//Decimal convertions
	public static String decimalToBinary(Long n) {

		String result = ((n % 2) == 0) ? "0" : "1";

		if (n < 2) {
			return result;
		}

		return decimalToBinary(n / 2) + result;
	}

	public static String decimalToOctal(Long n) {
		String result = Long.toString(n % 8);

		if (n < 8) {
			return result;
		}

		return decimalToOctal(n / 8) + result;
	}

	public static String decimalToHexadecimal(Long n) {
		String result = Long.toString(n % 16);

		switch (result) {
		case "10":
			result = "A";
			break;
		case "11":
			result = "B";
			break;
		case "12":
			result = "C";
			break;
		case "13":
			result = "D";
			break;
		case "14":
			result = "E";
			break;
		case "15":
			result = "F";
			break;
		}
		if (n < 16) {
			return result;
		}
		return decimalToHexadecimal(n / 16) + result;
	}

	//IMPORTANT: CHANGE THIS METHOD TO RECURSIVE
	public static int binaryToDecimal(String n) {
		int len = n.length();
		int sum = 0;

		for (int i = len - 1, j = 0; i >= 0; i--, j++) {
			sum += Integer.parseInt(n.substring(i)) * (2 ^ j);
		}

		return sum;
	}

	//IMPORTANT: CHANGE THIS METHOD TO RECURSIVE
	public static String octalToDecimal(String n) {
		int len = n.length();
		long sum = 0;

		for (int i = len - 1, j = 0; i >= 0; i--, j++) {
			sum += Long.parseLong(n.substring(i)) * (8 ^ j);
		}

		n = Long.toString(sum);
		return n;
	}

	//IMPORTANT: CHANGE THIS METHOD TO RECURSIVE
	public static String hexadecimalToDecimal(String n) {
		int len = n.length();
		long sum = 0;

		for (int i = len - 1, j = 0; i >= 0; i--, j++) {
			sum += Long.parseLong(n.substring(i)) * (16 ^ j);
		}

		n = Long.toString(sum);
		return n;
	}
}
