#include <stdio.h>
#include <stdlib.h>

int main() {

    int a[] = {1, 0, 5, -2, -5, 7};
    int soma = 0;
    int i;

    soma = a[0] + a[1] + a[5];

    a[4] = 100;

    for(i = 0; i < 6; i++) {
        printf("%d\n", a[i]);
    }

    getchar();

    return 0;
}