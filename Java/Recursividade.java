import java.util.Scanner;

public class Recursividade {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        long n = 0;
        while(n != -1) {
            System.out.print("Digite um numero: ");
            n = in.nextInt();
            //printRecursivo(n);
            // System.out.println(somaRecursiva(n));
            // System.out.println(fatorial(n));
            // System.out.println(toBinary(n));
            System.out.println(decToBin(n));
            System.out.println(decToOctal(n));
            System.out.println(decToHex(n));
        }
        in.close();
    }

    public static void printRecursivo(int n) {
        System.out.println(n);
        if (n > 0) {
            printRecursivo(n - 1);
        }
    }

    public static int somaRecursiva(int n) {
        if (n == 1) {
            return 1;
        } else {
            return somaRecursiva(n - 1) + n;
        }
    }

    public static int fatorial(int n) {
        if (n == 1) {
            return 1;
        } else {
            return fatorial(n - 1) * n;
        }
    }


    public static String decToBin(long n) {
        String result = ((n % 2 == 0) ? "0" : "1");

        if (n == 0 || n == 1) {
            return result;
        }

        return decToBin(n / 2) + result;

    }

    public static String decToOctal(long n) {
        String result = Long.toString(n % 8);
        if (n < 8) {
            return result;
        }

        return decToOctal(n / 8) + result;
    }

    public static String decToHex(long n) {
        String result = Long.toString(n % 16);
        switch(result) {
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

        return decToHex(n / 16) + result;
    }

}