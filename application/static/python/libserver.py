import random

def merge_sort(vector: list) -> list: 
    
    """this function sorts a vector using mergesort
    
        Parameters
        ----------
        vector: vector(array) to be sorted
        
        Returns
        ----------
        vector sorted
    """
    
    if len(vector) == 1: #case base, we've divided our vector so the current vector has 1 element
        
        return vector

    #if our vector still not has 1 element we'll continue dividing it into two halves 
    
    middle = len(vector) // 2 #find the middle of the vector
    
    left_vector = vector[:middle] 
    right_vector = vector[middle:]
    
    #save each half into a new vector to be sorted
    
    left_result = merge_sort(left_vector)
    right_result = merge_sort(right_vector)
    
    return merge(left_result, right_result)
    
def merge(vector_a: list, vector_b: list) -> list: 
    
    """this function sorts a vector using mergesort
    
        Parameters
        ----------
        vector_a: vector(array) to be sorted (left half)
        vector_b: vector(array) to be sorted (right_half)
        
        Returns
        ----------
        vector sorted
    """
    
    vector_c = []
    
    #compare smallest element of each vector then append the smallest of both vectors to the merge vector(vector_c)
    
    while len(vector_a) > 0 and len(vector_b) > 0: #while both vectors have elements do this
        
        if vector_a[0] > vector_b[0]:  
            
            vector_c.append(vector_b[0])

            vector_b.pop(0)
        
        else: 
            
            vector_c.append(vector_a[0])
            
            vector_a.pop(0)
    
    #if missing elements in any vector append the rest of the elements to the merge vector(vector_c) since they are bigger than previous appended 
    
    while len(vector_a) > 0: 
        
        vector_c.append(vector_a[0])
        
        vector_a.pop(0)
    
    while len(vector_b) > 0: 
    
        vector_c.append(vector_b[0])

        vector_b.pop(0)
    
    return vector_c 

def heap_sort(vector: list) -> list:

    """this function sorts a vector using heapsort
    
        Parameters
        ----------
        vector: vector(array) to be sorted
        
        Returns
        ----------
        vector sorted
    """
    size = len(vector)
    
    #build max-heap 
    
    for i in range(size // 2, -1, -1): #complete trees have a property to have the first non leaf node at index n / 2 - 1
        
        heapify(vector, size, i)
    
    for i in range(size - 1, 0, -1): 
        
        #swap the max element with the last element of the vector 
        
        vector[i], vector[0] = vector[0], vector[i]
        
        #heapify root element
        
        heapify(vector, i, 0)
    
    return vector

def heapify(vector: list, size: int, i: int) -> None: 
    
    """this function converts a heap into max-heap 
    
        Parameters
        ----------
        vector: vector(array) to be heapified
        
        size: length of the vector 
        
        i: current parent of any sub-tree
    """
    largest = i #represents the parent node of the tree or sub-tree (which should be the largest if not then it needs to be swapped)
    
    left_child = 2 * i + 1 #index of left child in the vector
    right_child = 2 * i + 2 #index of right child in the vector
    
    #check if the actual sub-tree is max-heap 
    
    if left_child < size and vector[i] < vector[left_child]: #this line means if you're still in the bounds of the vector and the child is greater than its parent
        
        largest = left_child

    if right_child < size and vector[largest] < vector[right_child]: #this line means if you're still in the bounds of the vector and the right child is greater, in case the left child is greater than its parent, than its sibling and parent
        
        largest = right_child
    
    #if root it's not the largest, swap with the largest and continue heapifying 
    
    if largest != i: 
        
        vector[i], vector[largest] = vector[largest], vector[i]
        
        heapify(vector, size, largest)


def quick_sort(vector: list, start: int, stop: int, option: str) -> list:

    if start < stop:

        pivot = partition(vector, start, stop, option)

        quick_sort(vector, start, pivot - 1, option)

        quick_sort(vector, pivot + 1, stop, option)

    return vector


def partition(vector: list, start: int, stop: int, option: str = "random") -> int:

    if option == "left":

        pivot = vector[start]

        i = start + 1

        for j in range(start + 1, stop + 1):

            if vector[j] <= pivot:

                (vector[i], vector[j]) = (vector[j], vector[i])

                i += 1

        (vector[i - 1], vector[start]) = (vector[start], vector[i - 1])

        return i - 1

    if option == "right":

        pivot = vector[stop]

        i = start - 1

        for j in range(start, stop):

            if vector[j] <= pivot:

                i += 1

                (vector[i], vector[j]) = (vector[j], vector[i])

        (vector[i + 1], vector[stop]) = (vector[stop], vector[i + 1])

        return i + 1
    
    if option == "median":
        
        pivot = sorted(vector[start], vector[(start + stop - 1) // 2], vector[stop - 1])[1]
        pivot_loc = vector.index(pivot)
        

def generate_vector(size: int, min_number: int, max_number: int) -> list: 
    
    vector = []
    
    for i in range(size):
        
        vector.append(random.randint(min_number, max_number))
    
    return vector 