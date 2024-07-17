import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def find_mersenne_factors(p):
    if not is_prime(p):
        print(f"{p} is not prime, so 2^{p} - 1 is not a Mersenne prime.")
        return []

    n = 2**p - 1  # Mersenne number
    print(f"Finding factors of Mersenne number 2^{p} - 1 = {n}")

    factors = []
    k = 1
    while True:
        q = 2 * k * p + 1
        if q * q > n:
            break
        if (q % 4 == 1 or q % 8 == 3) and is_prime(q) and n % q == 0:
            factors.append(q)
        k += 1

    if len(factors) == 0:
        print(f"No factors found. 2^{p} - 1 = {n} is prime!")
    else:
        print(f"Found {len(factors)} factor(s):")
        print(', '.join(map(str, factors)))

    return factors

if __name__ == "__main__":
    p = 43  # Change this to the desired Mersenne exponent
    find_mersenne_factors(p)