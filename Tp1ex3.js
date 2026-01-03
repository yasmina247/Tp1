function trier(tab) {
    let n = tab.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (tab[j] < tab[min]) {
                min = j;
            }
        }

        let temp = tab[i];
        tab[i] = tab[min];
        tab[min] = temp;
    }

    return tab;
}
