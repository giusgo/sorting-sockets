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

    else:

        ...
