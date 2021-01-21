
//LRU Cache: Design and build a "least recently used" cache, which evicts the least recently used item.  The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key) and be initialized with a max size.  When it is full, it should evict the least recently used item.

class LRUCache{
    constructor(){
        this.max = 4;
        this.values = [];
    }
    AddItem(val){
        if(this.values.length < this.max){
            this.values.unshift(val);
        }
        else{
            this.values.pop();
            this.values.unshift(val);
        }
        return this;
    }
}

var myCache = new LRUCache();
myCache.AddItem(3)
myCache.AddItem(4)
myCache.AddItem(5)
myCache.AddItem(6)
myCache.AddItem(7)
console.log(myCache.values);