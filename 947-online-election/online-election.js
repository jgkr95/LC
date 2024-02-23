/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
    let freq = {}
    let timeLeads = {}
    let currentLead = persons[0];

    for (let i = 0; i < persons.length; i++) {
        freq[persons[i]] = (freq[persons[i]] || 0) + 1;
        if (freq[persons[i]] >= freq[currentLead]) {
            currentLead = persons[i];
        }
        timeLeads[times[i]] = currentLead;

    }
    console.log(timeLeads)
    
    this.timeLeads = timeLeads;
    this.times=times;

};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    let low = 0;
    let high = this.times.length - 1;

    let targetIndex;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // if (this.times[mid] == t) {
        //     targetIndex = mid;
        //     break;
        // } else
         if (t < this.times[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
            targetIndex = mid;
        }
    }
    console.log(t,targetIndex-1,this.times[targetIndex-1],this.timeLeads[this.times[targetIndex - 1]])
    return this.timeLeads[this.times[targetIndex]]
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */