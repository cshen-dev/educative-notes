class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


class TreeDiameter {

  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    this.dfs(root)

    return this.treeDiameter;
  }

  dfs(node) {
    if (!node) return 0

    const left = this.dfs(node.left)
    const right = this.dfs(node.right)
    const sum = left + right + 1

    this.treeDiameter = Math.max(sum, this.treeDiameter)

    return Math.max(left, right) + 1
  }
};


var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
