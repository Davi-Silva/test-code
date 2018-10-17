#include <stdio.h>
#include <stdlib.h>

int main() {
    int a[6];
    int i;

    for(i = 0; i < 6; i++) {
        scanf("%d", &a[i]);
    }

    for(i = 0; i < 6; i++) {
        printf("%d\n", a[i]);
    }

    return 0;
}