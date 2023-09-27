from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in loan_files/__init__.py
from loan_files import __version__ as version

setup(
	name="loan_files",
	version=version,
	description="DSA Helper",
	author="TCB",
	author_email="gotorishab@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
