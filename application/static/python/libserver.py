def merge_sort(vector: list) -> list: 
    
    if len(vector) > 1:

        mid = len(vector) // 2 

        left = vector[:mid]

        right = vector[mid:]

        merge_sort(left)

        merge_sort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):
            
            if left[i] <= right[j]:
                
                vector[k] = left[i]
                
                i += 1
            
            else: 
                
                vector[k] = right[j]
                
                j += 1 
            
            k += 1

        while i < len(left):
            
            vector[k] = left[i]
                
            i += 1
            k += 1

        while j < len(right):
            
            vector[k] = right[j]
            
            j += 1
            k += 1

    return vector 

def heap_sort(vector: list) -> list: 
    
    ... 
    
def quick_sort_left_pivot(vector: list, start: int, stop: int) -> list: 
    
    ...

def quick_sort_right_pivot(vector: list, start: int, stop: int) -> list: 
    
    ...

def quick_sort(vector: list, start: int, stop: int) -> list: 
    
    ... 

def partition(vector: list, start: int, stop: int, option: str) -> int: 
    
    if option == "left": 
        
        pivot = vector[stop] 
        
        i = start - 1 
        
        for j in range(start, stop):
            
            if vector[j] <= pivot: 
                
                i += 1 
                
                (vector[i], vector[j]) = (vector[j])
    
    else: 
        
        ...

def random_partition() -> int: 
    
    ...

print(merge_sort([4,1,100,230,12,0, 100, 20312, 1, 1, 1, -1, 0, 30, 29, 30, 123, 500, -123, -2, -1, -2000, -1230, 10000000, 1, 40]))