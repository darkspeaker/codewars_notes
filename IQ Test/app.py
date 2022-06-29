#6
def iq_test(numbers):
    k_int = numbers.replace(' ', ',')
    #print(k_int)
    odd = []
    evel = []
    k_list = k_int.split(',')
    #k_list = [int(x) for x in k_list]
    for i in range(len(k_list)):
        k_list[i] = int(k_list[i])
        if k_list[i] % 2 == 0:
            #print(k_list[i], i + 1)
            odd.append(k_list[i])
            
            #print(odd)
        if k_list[i] % 2 != 0:
            #print(k_list[i], i + 1)
            evel.append(k_list[i])
            #print(evel)
    print(odd)
    print(evel)
    if len(odd) > len(evel):
        for i in range(len(k_list)):
            if k_list[i] == evel[0]:
                print(evel[0])
                return i + 1
    if len(odd) < len(evel):
        for i in range(len(k_list)):
            if k_list[i] == odd[0]:
                print(odd[0])
                return i + 1
    #print(k_list)

print(iq_test('31 51 33 17 3 45 17 51 13 45 45 51 45 49 13 2 29 13 29 41 23 31 15 19 1'))