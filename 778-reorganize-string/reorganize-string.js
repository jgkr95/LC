function reorganizeString(s) {
    const freq = new Map();
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const maxAllowed = Math.ceil(s.length / 2);
    for (let count of freq.values()) {
        if (count > maxAllowed) return "";
    }

    // Max Heap by frequency
    const heap = [...freq.entries()];
    heap.sort((a, b) => b[1] - a[1]); // emulate max heap

    const res = [];
    let prev = null;

    while (heap.length > 0) {
        let [char, count] = heap.shift();

        // Add previous back if exists
        if (prev && prev[1] > 0) {
            heap.push(prev);
            heap.sort((a, b) => b[1] - a[1]); // re-heapify
        }

        res.push(char);
        count -= 1;
        prev = [char, count];
    }

    // Check if valid
    for (let i = 1; i < res.length; i++) {
        if (res[i] === res[i - 1]) return "";
    }

    return res.join('');
}
