from calculator import calculate_average

def test_calculate_average():
    assert calculate_average([1, 2, 3, 4, 5]) == 3.0
    assert calculate_average([0]) == 0.0
    assert calculate_average([]) == 0.0
