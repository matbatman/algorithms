my_arr = [1, 3, 5, 7, 9]

//binary search: log(2)n steps. Sorted

let binary_search = (arr, item) => {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = arr[mid]

        if (guess === item) return mid

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
        return null
    }
}

/* Graphs: path */
const graph = {
    you: ['alice', 'bob', 'claire'],
    claire: ['thom', 'johny'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    anuj: [],
    peggy: [],
    thom: [],
    johny: []
}

const path = (end_vertex) => {
    const startPoint = 'you'; // начальная точка графа(исток)
    const parents = {}; // объект с родителями, используется для построения кратчайшего пути
    const distances = { // объект с дистанцией, используется для определения дублирования захода в точку и расчета длины пути, по необходимости
        [startPoint]: 0 //нулеввая длина от начальной точки до неё самой
    };
    const queue = [startPoint]; // очередь для работы алгоритма, в нее складываем все элементы и извлекаем из неё
    while (queue.length > 0) { // пока очередь имеет хоть один элемент цикл будет повторяться
        const currentFromQueue = queue[0]; //извлекаем первый элемент из очереди, на первой итерации он будет 'you'
        queue.shift(); //удаляем первый элемент сверху очереди
        for (let iter of graph[currentFromQueue]) { // для всех потомков рассматриваемого элемета
            if (!distances[iter]) {  // если дистанция нулевая(в точку еще не заходили)
                distances[iter] = distances[currentFromQueue] + 1; // добавляем длину дистанции для рассматриваемого потомка 
                queue.push(iter) // добавляем потомка в очередь
                parents[iter] = currentFromQueue; // добавляем в массив родителей информацию о том, что текущий потомок наследуется от рассматриваемого родителя
            }
        }
    }
    const path = [end_vertex]; // начало пути с конца
    let parent = parents[end_vertex]; // берем первого родителя потомка
    while (!!parent) { // пока родители существуют 
        path.push(parent); //добавляем родителя в путь
        parent = parents[parent] // ищем родителя у текущего родителя
    }
    path.reverse() // реверсируем путь
    console.log(path)
}
// path('peggy')

//BFS
const gr = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g']
}

let bfs = (gr, start, end) => {
    let queue = []
    queue.push(start)

    while (queue.length > 0) {
        const current = queue.shift()
        if (!gr[current]) {
            gr[current] = []
        }
        if (gr[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...gr[current]]
        }
    }
}
//console.log(bfs(gr, 'a', 'g'))

//Dijkstra's algorithm
const wgr = {
    a: { b: 2, c: 1 },
    b: { f: 7 },
    c: { d: 5, e: 2 },
    d: { f: 2 },
    e: { f: 1 },
    f: { g: 1 },
    g: {}
}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000000000000
        }
    })

    let node = findNodeLowest(costs, processed)
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowest(costs, processed)
    }
    return costs
}

function findNodeLowest(costs, processed) {
    let lowestCost = 100000000000000000
    let lowestNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(wgr, 'a', 'g'))