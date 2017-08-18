import matplotlib.pyplot as plt
import random
import numpy as np
y = np.random.normal(loc=0.5, scale=0.4, size=1000)
y = y[(y > 0) & (y < 1)]
y.sort()
x = np.arange(len(y))
for i in range(len(x)):
	x[i] = x[i]*(1 - (i/10))


plt.subplot(221)
plt.plot(x, y)
plt.title('Donaciones en el Oriente')
plt.ylabel('Numero de donaciones')
plt.grid(True)

plt.savefig('Estadistica Oriente.png')
plt.close()