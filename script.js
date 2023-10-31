class LinkedList{
    constructor(){
        this.list = []
    }
    append(value){
        let newNode = new Node(value);
        if (this.size() > 0) this.tail().nextNode = newNode;
        this.list.push(newNode);
    }
    prepend(value){
        let newNode = new Node(value);
        this.list.unshift(newNode);
        if (this.size() > 0) this.head().nextNode = this.list.at(1);
    }
    size(){
        return this.list.length;
    }
    head(){
        return this.list.at(0);
    }
    tail(){
        return this.list.at(-1);
    }
    at(index){
        return this.list.at(index);
    }
    pop(){
        this.list.pop();
    }
    contains(value){
        this.list.forEach(function(node){
            if (value === node.value){
                return true;
            }
            return false;
        })
    }
    find(value){
        this.list.forEach(function(node){
            if (value === node.value){
                return this.list.indexOf(node);
            }
            return null;
        })
    }
    toString(){
        let string = "";
        this.list.forEach(function(node){
            string += `( ${node.value} ) -> `;
            if (node.nextNode === null) string += 'null';
        })
        return string;
    }
    insertAt(value, index){
        if (index === 0) this.prepend(value);
        else if (index >= this.size()) this.append(value);
        else{
            let newNode = new Node(value);
            this.list.splice(index, 0, newNode);
            this.at(index - 1).nextNode = this.at(index);
            this.at(index).nextNode = this.at(index + 1);
        }
    }
    removeAt(index){
        this.list.splice(index, 1);
        this.at(index - 1).nextNode = this.at(index);
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}